import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreatePaymentsServerList: readonly ["https://api.twilio.com"];
export declare class CreatePaymentsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreatePaymentsCreatePaymentsRequest extends SpeakeasyBase {
    bankAccountType?: shared.PaymentsEnumBankAccountTypeEnum;
    /**
     * A positive decimal value less than 1,000,000 to charge against the credit card or bank account. Default currency can be overwritten with `currency` field. Leave blank or set to 0 to tokenize.
     */
    chargeAmount?: number;
    /**
     * The currency of the `charge_amount`, formatted as [ISO 4127](http://www.iso.org/iso/home/standards/currency_codes.htm) format. The default value is `USD` and all values allowed from the Pay Connector are accepted.
     */
    currency?: string;
    /**
     * The description can be used to provide more details regarding the transaction. This information is submitted along with the payment details to the Payment Connector which are then posted on the transactions.
     */
    description?: string;
    /**
     * A unique token that will be used to ensure that multiple API calls with the same information do not result in multiple transactions. This should be a unique string value per API call and can be a randomly generated.
     */
    idempotencyKey: string;
    /**
     * A list of inputs that should be accepted. Currently only `dtmf` is supported. All digits captured during a pay session are redacted from the logs.
     */
    input?: string;
    /**
     * A positive integer that is used to validate the length of the `PostalCode` inputted by the user. User must enter this many digits.
     */
    minPostalCodeLength?: number;
    /**
     * A single-level JSON object used to pass custom parameters to payment processors. (Required for ACH payments). The information that has to be included here depends on the <Pay> Connector. [Read more](https://www.twilio.com/console/voice/pay-connectors).
     */
    parameter?: any;
    /**
     * This is the unique name corresponding to the Pay Connector installed in the Twilio Add-ons. Learn more about [<Pay> Connectors](https://www.twilio.com/console/voice/pay-connectors). The default value is `Default`.
     */
    paymentConnector?: string;
    paymentMethod?: shared.PaymentsEnumPaymentMethodEnum;
    /**
     * Indicates whether the credit card postal code (zip code) is a required piece of payment information that must be provided by the caller. The default is `true`.
     */
    postalCode?: boolean;
    /**
     * Indicates whether the credit card security code is a required piece of payment information that must be provided by the caller. The default is `true`.
     */
    securityCode?: boolean;
    /**
     * Provide an absolute or relative URL to receive status updates regarding your Pay session. Read more about the [expected StatusCallback values](https://www.twilio.com/docs/voice/api/payment-resource#statuscallback)
     */
    statusCallback: string;
    /**
     * The number of seconds that <Pay> should wait for the caller to press a digit between each subsequent digit, after the first one, before moving on to validate the digits captured. The default is `5`, maximum is `600`.
     */
    timeout?: number;
    tokenType?: shared.PaymentsEnumTokenTypeEnum;
    /**
     * Credit card types separated by space that Pay should accept. The default value is `visa mastercard amex`
     */
    validCardTypes?: string;
}
export declare class CreatePaymentsRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the resource.
     */
    accountSid: string;
    /**
     * The SID of the call that will create the resource. Call leg associated with this sid is expected to provide payment information thru DTMF.
     */
    callSid: string;
    requestBody?: CreatePaymentsCreatePaymentsRequest;
}
export declare class CreatePaymentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    apiV2010AccountCallPayments?: shared.ApiV2010AccountCallPayments;
}
