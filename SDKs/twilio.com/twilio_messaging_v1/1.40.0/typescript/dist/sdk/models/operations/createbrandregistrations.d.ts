import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateBrandRegistrationsServerList: readonly ["https://messaging.twilio.com"];
export declare class CreateBrandRegistrationsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateBrandRegistrationsCreateBrandRegistrationsRequest extends SpeakeasyBase {
    /**
     * A2P Messaging Profile Bundle Sid.
     */
    a2PProfileBundleSid: string;
    /**
     * Type of brand being created. One of: "STANDARD", "STARTER". STARTER is for low volume, starter use cases. STANDARD is for all other use cases.
     */
    brandType?: string;
    /**
     * Customer Profile Bundle Sid.
     */
    customerProfileBundleSid: string;
    /**
     * A boolean that specifies whether brand should be a mock or not. If true, brand will be registered as a mock brand. Defaults to false if no value is provided.
     */
    mock?: boolean;
    /**
     * A flag to disable automatic secondary vetting for brands which it would otherwise be done.
     */
    skipAutomaticSecVet?: boolean;
}
export declare class CreateBrandRegistrationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    messagingV1BrandRegistrations?: shared.MessagingV1BrandRegistrations;
}
