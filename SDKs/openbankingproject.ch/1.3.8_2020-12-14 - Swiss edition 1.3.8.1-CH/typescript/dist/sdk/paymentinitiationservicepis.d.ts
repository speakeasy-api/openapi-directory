import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The component for Payment Initiation Service (PIS) offers the following services:
 *
 * @remarks
 *   * Initiation and update of a payment request
 *   * Status information of a payment
 *
 */
export declare class PaymentInitiationServicePIS {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Payment cancellation request
     *
     * @remarks
     * This method initiates the cancellation of a payment.
     * Depending on the payment-service, the payment-product and the ASPSP's implementation,
     * this TPP call might be sufficient to cancel a payment.
     * If an authorisation of the payment cancellation is mandated by the ASPSP,
     * a corresponding hyperlink will be contained in the response message.
     *
     * Cancels the addressed payment with resource identification paymentId if applicable to the payment-service, payment-product and received in product related timelines (e.g. before end of business day for scheduled payments of the last business day before the scheduled execution day).
     *
     * The response to this DELETE command will tell the TPP whether the
     *   * access method was rejected,
     *   * access method was successful, or
     *   * access method is generally applicable, but further authorisation processes are needed.
     *
     */
    cancelPayment(req: operations.CancelPaymentRequest, security: operations.CancelPaymentSecurity, config?: AxiosRequestConfig): Promise<operations.CancelPaymentResponse>;
    /**
     * Read the SCA status of the payment cancellation's authorisation
     *
     * @remarks
     * This method returns the SCA status of a payment initiation's authorisation sub-resource.
     *
     */
    getPaymentCancellationScaStatus(req: operations.GetPaymentCancellationScaStatusRequest, security: operations.GetPaymentCancellationScaStatusSecurity, config?: AxiosRequestConfig): Promise<operations.GetPaymentCancellationScaStatusResponse>;
    /**
     * Get payment information
     *
     * @remarks
     * Returns the content of a payment object
     */
    getPaymentInformation(req: operations.GetPaymentInformationRequest, security: operations.GetPaymentInformationSecurity, config?: AxiosRequestConfig): Promise<operations.GetPaymentInformationResponse>;
    /**
     * Get payment initiation authorisation sub-resources request
     *
     * @remarks
     * Read a list of all authorisation subresources IDs which have been created.
     *
     * This function returns an array of hyperlinks to all generated authorisation sub-resources.
     *
     */
    getPaymentInitiationAuthorisation(req: operations.GetPaymentInitiationAuthorisationRequest, security: operations.GetPaymentInitiationAuthorisationSecurity, config?: AxiosRequestConfig): Promise<operations.GetPaymentInitiationAuthorisationResponse>;
    /**
     * Will deliver an array of resource identifications to all generated cancellation authorisation sub-resources
     *
     * @remarks
     * Retrieve a list of all created cancellation authorisation sub-resources.
     *
     */
    getPaymentInitiationCancellationAuthorisationInformation(req: operations.GetPaymentInitiationCancellationAuthorisationInformationRequest, security: operations.GetPaymentInitiationCancellationAuthorisationInformationSecurity, config?: AxiosRequestConfig): Promise<operations.GetPaymentInitiationCancellationAuthorisationInformationResponse>;
    /**
     * Read the SCA status of the payment authorisation
     *
     * @remarks
     * This method returns the SCA status of a payment initiation's authorisation sub-resource.
     *
     */
    getPaymentInitiationScaStatus(req: operations.GetPaymentInitiationScaStatusRequest, security: operations.GetPaymentInitiationScaStatusSecurity, config?: AxiosRequestConfig): Promise<operations.GetPaymentInitiationScaStatusResponse>;
    /**
     * Payment initiation status request
     *
     * @remarks
     * Check the transaction status of a payment initiation.
     */
    getPaymentInitiationStatus(req: operations.GetPaymentInitiationStatusRequest, security: operations.GetPaymentInitiationStatusSecurity, config?: AxiosRequestConfig): Promise<operations.GetPaymentInitiationStatusResponse>;
    /**
     * Payment initiation request
     *
     * @remarks
     * This method is used to initiate a payment at the ASPSP.
     *
     * ## Variants of payment initiation requests
     *
     * This method to initiate a payment initiation at the ASPSP can be sent with either a JSON body or an pain.001 body depending on the payment product in the path.
     *
     * There are the following **payment products**:
     *
     *   - Payment products with payment information in *JSON* format:
     *     - ***domestic-swiss-credit-transfers-isr***
     *     - ***domestic-swiss-credit-transfers***
     *     - ***domestic-swiss-credit-transfers-qr***
     *     - ***domestic-swiss-foreign-credit-transfers***
     *     - ***swiss-sepa-credit-transfers***
     *     - ***swiss-cross-border-credit-transfers***
     *   - Payment products with payment information in *SIX pain.001* XML format:
     *     - ***pain.001-sepa-credit-transfers***
     *     - ***pain.001-cross-border-credit-transfers***
     *     - ***pain.001-swiss-six-credit-transfers***
     *
     * Furthermore the request body depends on the **payment-service**:
     *   * ***payments***: A single payment initiation request.
     *   * ***bulk-payments***: A collection of several payment initiation requests.
     *
     *     In case of a *pain.001* message there are more than one payments contained in the *pain.001 message.
     *
     *     In case of a *JSON* there are several JSON payment blocks contained in a joining list.
     *   * ***periodic-payments***:
     *     Create a standing order initiation resource for recurrent i.e. periodic payments addressable under {paymentId}
     *      with all data relevant for the corresponding payment product and the execution of the standing order contained in a JSON body.
     *
     * This is the first step in the API to initiate the related recurring/periodic payment.
     *
     * ## Single and mulitilevel SCA Processes
     *
     * The payment initiation requests are independent from the need of one or multilevel
     * SCA processing, i.e. independent from the number of authorisations needed for the execution of payments.
     *
     * But the response messages are specific to either one SCA processing or multilevel SCA processing.
     *
     * For payment initiation with multilevel SCA, this specification requires an explicit start of the authorisation,
     * i.e. links directly associated with SCA processing like 'scaRedirect' or 'scaOAuth' cannot be contained in the
     * response message of a Payment Initation Request for a payment, where multiple authorisations are needed.
     * Also if any data is needed for the next action, like selecting an SCA method is not supported in the response,
     * since all starts of the multiple authorisations are fully equal.
     * In these cases, first an authorisation sub-resource has to be generated following the 'startAuthorisation' link.
     *
     */
    initiatePaymentJson(req: operations.InitiatePaymentJsonRequest, security: operations.InitiatePaymentJsonSecurity, config?: AxiosRequestConfig): Promise<operations.InitiatePaymentJsonResponse>;
    /**
     * Payment initiation request
     *
     * @remarks
     * This method is used to initiate a payment at the ASPSP.
     *
     * ## Variants of payment initiation requests
     *
     * This method to initiate a payment initiation at the ASPSP can be sent with either a JSON body or an pain.001 body depending on the payment product in the path.
     *
     * There are the following **payment products**:
     *
     *   - Payment products with payment information in *JSON* format:
     *     - ***domestic-swiss-credit-transfers-isr***
     *     - ***domestic-swiss-credit-transfers***
     *     - ***domestic-swiss-credit-transfers-qr***
     *     - ***domestic-swiss-foreign-credit-transfers***
     *     - ***swiss-sepa-credit-transfers***
     *     - ***swiss-cross-border-credit-transfers***
     *   - Payment products with payment information in *SIX pain.001* XML format:
     *     - ***pain.001-sepa-credit-transfers***
     *     - ***pain.001-cross-border-credit-transfers***
     *     - ***pain.001-swiss-six-credit-transfers***
     *
     * Furthermore the request body depends on the **payment-service**:
     *   * ***payments***: A single payment initiation request.
     *   * ***bulk-payments***: A collection of several payment initiation requests.
     *
     *     In case of a *pain.001* message there are more than one payments contained in the *pain.001 message.
     *
     *     In case of a *JSON* there are several JSON payment blocks contained in a joining list.
     *   * ***periodic-payments***:
     *     Create a standing order initiation resource for recurrent i.e. periodic payments addressable under {paymentId}
     *      with all data relevant for the corresponding payment product and the execution of the standing order contained in a JSON body.
     *
     * This is the first step in the API to initiate the related recurring/periodic payment.
     *
     * ## Single and mulitilevel SCA Processes
     *
     * The payment initiation requests are independent from the need of one or multilevel
     * SCA processing, i.e. independent from the number of authorisations needed for the execution of payments.
     *
     * But the response messages are specific to either one SCA processing or multilevel SCA processing.
     *
     * For payment initiation with multilevel SCA, this specification requires an explicit start of the authorisation,
     * i.e. links directly associated with SCA processing like 'scaRedirect' or 'scaOAuth' cannot be contained in the
     * response message of a Payment Initation Request for a payment, where multiple authorisations are needed.
     * Also if any data is needed for the next action, like selecting an SCA method is not supported in the response,
     * since all starts of the multiple authorisations are fully equal.
     * In these cases, first an authorisation sub-resource has to be generated following the 'startAuthorisation' link.
     *
     */
    initiatePaymentMultipart(req: operations.InitiatePaymentMultipartRequest, security: operations.InitiatePaymentMultipartSecurity, config?: AxiosRequestConfig): Promise<operations.InitiatePaymentMultipartResponse>;
    /**
     * Payment initiation request
     *
     * @remarks
     * This method is used to initiate a payment at the ASPSP.
     *
     * ## Variants of payment initiation requests
     *
     * This method to initiate a payment initiation at the ASPSP can be sent with either a JSON body or an pain.001 body depending on the payment product in the path.
     *
     * There are the following **payment products**:
     *
     *   - Payment products with payment information in *JSON* format:
     *     - ***domestic-swiss-credit-transfers-isr***
     *     - ***domestic-swiss-credit-transfers***
     *     - ***domestic-swiss-credit-transfers-qr***
     *     - ***domestic-swiss-foreign-credit-transfers***
     *     - ***swiss-sepa-credit-transfers***
     *     - ***swiss-cross-border-credit-transfers***
     *   - Payment products with payment information in *SIX pain.001* XML format:
     *     - ***pain.001-sepa-credit-transfers***
     *     - ***pain.001-cross-border-credit-transfers***
     *     - ***pain.001-swiss-six-credit-transfers***
     *
     * Furthermore the request body depends on the **payment-service**:
     *   * ***payments***: A single payment initiation request.
     *   * ***bulk-payments***: A collection of several payment initiation requests.
     *
     *     In case of a *pain.001* message there are more than one payments contained in the *pain.001 message.
     *
     *     In case of a *JSON* there are several JSON payment blocks contained in a joining list.
     *   * ***periodic-payments***:
     *     Create a standing order initiation resource for recurrent i.e. periodic payments addressable under {paymentId}
     *      with all data relevant for the corresponding payment product and the execution of the standing order contained in a JSON body.
     *
     * This is the first step in the API to initiate the related recurring/periodic payment.
     *
     * ## Single and mulitilevel SCA Processes
     *
     * The payment initiation requests are independent from the need of one or multilevel
     * SCA processing, i.e. independent from the number of authorisations needed for the execution of payments.
     *
     * But the response messages are specific to either one SCA processing or multilevel SCA processing.
     *
     * For payment initiation with multilevel SCA, this specification requires an explicit start of the authorisation,
     * i.e. links directly associated with SCA processing like 'scaRedirect' or 'scaOAuth' cannot be contained in the
     * response message of a Payment Initation Request for a payment, where multiple authorisations are needed.
     * Also if any data is needed for the next action, like selecting an SCA method is not supported in the response,
     * since all starts of the multiple authorisations are fully equal.
     * In these cases, first an authorisation sub-resource has to be generated following the 'startAuthorisation' link.
     *
     */
    initiatePaymentRaw(req: operations.InitiatePaymentRawRequest, security: operations.InitiatePaymentRawSecurity, config?: AxiosRequestConfig): Promise<operations.InitiatePaymentRawResponse>;
    /**
     * Start the authorisation process for a payment initiation
     *
     * @remarks
     * Create an authorisation sub-resource and start the authorisation process.
     * The message might in addition transmit authentication and authorisation related data.
     *
     * This method is iterated n times for a n times SCA authorisation in a
     * corporate context, each creating an own authorisation sub-endpoint for
     * the corresponding PSU authorising the transaction.
     *
     * The ASPSP might make the usage of this access method unnecessary in case
     * of only one SCA process needed, since the related authorisation resource
     * might be automatically created by the ASPSP after the submission of the
     * payment data with the first POST payments/{payment-product} call.
     *
     * The start authorisation process is a process which is needed for creating a new authorisation
     * or cancellation sub-resource.
     *
     * This applies in the following scenarios:
     *
     *   * The ASPSP has indicated with a 'startAuthorisation' hyperlink in the preceding Payment
     *     initiation response that an explicit start of the authorisation process is needed by the TPP.
     *     The 'startAuthorisation' hyperlink can transport more information about data which needs to be
     *     uploaded by using the extended forms:
     *     * 'startAuthorisationWithPsuIdentfication'
     *     * 'startAuthorisationWithPsuAuthentication'
     *     * 'startAuthorisationWithEncryptedPsuAuthentication'
     *     * 'startAuthorisationWithAuthentciationMethodSelection'
     *   * The related payment initiation cannot yet be executed since a multilevel SCA is mandated.
     *   * The ASPSP has indicated with a 'startAuthorisation' hyperlink in the preceding
     *     Payment cancellation response that an explicit start of the authorisation process is needed by the TPP.
     *     The 'startAuthorisation' hyperlink can transport more information about data which needs to be uploaded
     *     by using the extended forms as indicated above.
     *   * The related payment cancellation request cannot be applied yet since a multilevel SCA is mandate for
     *     executing the cancellation.
     *   * The signing basket needs to be authorised yet.
     *
     */
    startPaymentAuthorisation(req: operations.StartPaymentAuthorisationRequest, security: operations.StartPaymentAuthorisationSecurity, config?: AxiosRequestConfig): Promise<operations.StartPaymentAuthorisationResponse>;
    /**
     * Start the authorisation process for the cancellation of the addressed payment
     *
     * @remarks
     * Creates an authorisation sub-resource and start the authorisation process of the cancellation of the addressed payment.
     * The message might in addition transmit authentication and authorisation related data.
     *
     * This method is iterated n times for a n times SCA authorisation in a
     * corporate context, each creating an own authorisation sub-endpoint for
     * the corresponding PSU authorising the cancellation-authorisation.
     *
     * The ASPSP might make the usage of this access method unnecessary in case
     * of only one SCA process needed, since the related authorisation resource
     * might be automatically created by the ASPSP after the submission of the
     * payment data with the first POST payments/{payment-product} call.
     *
     * The start authorisation process is a process which is needed for creating a new authorisation
     * or cancellation sub-resource.
     *
     * This applies in the following scenarios:
     *
     *   * The ASPSP has indicated with a 'startAuthorisation' hyperlink in the preceding payment
     *     initiation response that an explicit start of the authorisation process is needed by the TPP.
     *     The 'startAuthorisation' hyperlink can transport more information about data which needs to be
     *     uploaded by using the extended forms:
     *     * 'startAuthorisationWithPsuIdentfication'
     *     * 'startAuthorisationWithPsuAuthentication'
     *     * 'startAuthorisationWithAuthentciationMethodSelection'
     *   * The related payment initiation cannot yet be executed since a multilevel SCA is mandated.
     *   * The ASPSP has indicated with a 'startAuthorisation' hyperlink in the preceding
     *     payment cancellation response that an explicit start of the authorisation process is needed by the TPP.
     *     The 'startAuthorisation' hyperlink can transport more information about data which needs to be uploaded
     *     by using the extended forms as indicated above.
     *   * The related payment cancellation request cannot be applied yet since a multilevel SCA is mandate for
     *     executing the cancellation.
     *   * The signing basket needs to be authorised yet.
     *
     */
    startPaymentInitiationCancellationAuthorisation(req: operations.StartPaymentInitiationCancellationAuthorisationRequest, security: operations.StartPaymentInitiationCancellationAuthorisationSecurity, config?: AxiosRequestConfig): Promise<operations.StartPaymentInitiationCancellationAuthorisationResponse>;
    /**
     * Update PSU data for payment initiation cancellation
     *
     * @remarks
     * This method updates PSU data on the cancellation authorisation resource if needed.
     * It may authorise a cancellation of the payment within the Embedded SCA Approach where needed.
     *
     * Independently from the SCA Approach it supports e.g. the selection of
     * the authentication method and a non-SCA PSU authentication.
     *
     * There are several possible update PSU data requests in the context of a cancellation authorisation within the payment initiation services needed,
     * which depends on the SCA approach:
     *
     * * Redirect SCA Approach:
     *   A specific Update PSU data request is applicable for
     *     * the selection of authentication methods, before choosing the actual SCA approach.
     * * Decoupled SCA Approach:
     *   A specific Update PSU data request is only applicable for
     *   * adding the PSU Identification, if not provided yet in the payment initiation request or the Account Information Consent Request, or if no OAuth2 access token is used, or
     *   * the selection of authentication methods.
     * * Embedded SCA Approach:
     *   The Update PSU data request might be used
     *   * to add credentials as a first factor authentication data of the PSU and
     *   * to select the authentication method and
     *   * transaction authorisation.
     *
     * The SCA approach might depend on the chosen SCA method.
     * For that reason, the following possible update PSU data request can apply to all SCA approaches:
     *
     * * Select an SCA method in case of several SCA methods are available for the customer.
     *
     * There are the following request types on this access path:
     *   * Update PSU identification
     *   * Update PSU authentication
     *   * Select PSU autorization method
     *     WARNING: This method needs a reduced header,
     *     therefore many optional elements are not present.
     *     Maybe in a later version the access path will change.
     *   * Transaction Authorisation
     *     WARNING: This method needs a reduced header,
     *     therefore many optional elements are not present.
     *     Maybe in a later version the access path will change.
     *
     */
    updatePaymentCancellationPsuData(req: operations.UpdatePaymentCancellationPsuDataRequest, security: operations.UpdatePaymentCancellationPsuDataSecurity, config?: AxiosRequestConfig): Promise<operations.UpdatePaymentCancellationPsuDataResponse>;
    /**
     * Update PSU data for payment initiation
     *
     * @remarks
     * This methods updates PSU data on the authorisation resource if needed.
     * It may authorise a payment within the Embedded SCA Approach where needed.
     *
     * Independently from the SCA Approach it supports e.g. the selection of
     * the authentication method and a non-SCA PSU authentication.
     *
     * There are several possible update PSU data requests in the context of payment initiation services needed,
     * which depends on the SCA approach:
     *
     * * Redirect SCA Approach:
     *   A specific update PSU data request is applicable for
     *     * the selection of authentication methods, before choosing the actual SCA approach.
     * * Decoupled SCA Approach:
     *   A specific update PSU data request is only applicable for
     *   * adding the PSU identification, if not provided yet in the payment initiation request or the account information consent request, or if no OAuth2 access token is used, or
     *   * the selection of authentication methods.
     * * Embedded SCA Approach:
     *   The Update PSU Data request might be used
     *   * to add credentials as a first factor authentication data of the PSU and
     *   * to select the authentication method and
     *   * transaction authorisation.
     *
     * The SCA Approach might depend on the chosen SCA method.
     * For that reason, the following possible Update PSU data request can apply to all SCA approaches:
     *
     * * Select an SCA method in case of several SCA methods are available for the customer.
     *
     * There are the following request types on this access path:
     *   * Update PSU identification
     *   * Update PSU authentication
     *   * Select PSU autorization method
     *     WARNING: This method needs a reduced header,
     *     therefore many optional elements are not present.
     *     Maybe in a later version the access path will change.
     *   * Transaction authorisation
     *     WARNING: This method needs a reduced header,
     *     therefore many optional elements are not present.
     *     Maybe in a later version the access path will change.
     *
     */
    updatePaymentPsuData(req: operations.UpdatePaymentPsuDataRequest, security: operations.UpdatePaymentPsuDataSecurity, config?: AxiosRequestConfig): Promise<operations.UpdatePaymentPsuDataResponse>;
}
