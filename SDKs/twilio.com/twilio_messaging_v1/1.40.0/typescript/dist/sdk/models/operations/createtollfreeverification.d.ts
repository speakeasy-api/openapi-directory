import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateTollfreeVerificationServerList: readonly ["https://messaging.twilio.com"];
export declare class CreateTollfreeVerificationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateTollfreeVerificationCreateTollfreeVerificationRequest extends SpeakeasyBase {
    /**
     * Additional information to be provided for verification.
     */
    additionalInformation?: string;
    /**
     * The city of the business or organization using the Tollfree number.
     */
    businessCity?: string;
    /**
     * The email address of the contact for the business or organization using the Tollfree number.
     */
    businessContactEmail?: string;
    /**
     * The first name of the contact for the business or organization using the Tollfree number.
     */
    businessContactFirstName?: string;
    /**
     * The last name of the contact for the business or organization using the Tollfree number.
     */
    businessContactLastName?: string;
    /**
     * The phone number of the contact for the business or organization using the Tollfree number.
     */
    businessContactPhone?: string;
    /**
     * The country of the business or organization using the Tollfree number.
     */
    businessCountry?: string;
    /**
     * The name of the business or organization using the Tollfree number.
     */
    businessName: string;
    /**
     * The postal code of the business or organization using the Tollfree number.
     */
    businessPostalCode?: string;
    /**
     * The state/province/region of the business or organization using the Tollfree number.
     */
    businessStateProvinceRegion?: string;
    /**
     * The address of the business or organization using the Tollfree number.
     */
    businessStreetAddress?: string;
    /**
     * The address of the business or organization using the Tollfree number.
     */
    businessStreetAddress2?: string;
    /**
     * The website of the business or organization using the Tollfree number.
     */
    businessWebsite: string;
    /**
     * Customer's Profile Bundle BundleSid.
     */
    customerProfileSid?: string;
    /**
     * An optional external reference ID supplied by customer and echoed back on status retrieval.
     */
    externalReferenceId?: string;
    /**
     * Estimate monthly volume of messages from the Tollfree Number.
     */
    messageVolume: string;
    /**
     * The email address to receive the notification about the verification result. .
     */
    notificationEmail: string;
    /**
     * Link to an image that shows the opt-in workflow. Multiple images allowed and must be a publicly hosted URL.
     */
    optInImageUrls: string[];
    optInType: shared.TollfreeVerificationEnumOptInTypeEnum;
    /**
     * An example of message content, i.e. a sample message.
     */
    productionMessageSample: string;
    /**
     * The SID of the Phone Number associated with the Tollfree Verification.
     */
    tollfreePhoneNumberSid: string;
    /**
     * The category of the use case for the Tollfree Number. List as many are applicable..
     */
    useCaseCategories: string[];
    /**
     * Use this to further explain how messaging is used by the business or organization.
     */
    useCaseSummary: string;
}
export declare class CreateTollfreeVerificationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    messagingV1TollfreeVerification?: shared.MessagingV1TollfreeVerification;
}
