import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LaunchProjectPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum LaunchProjectRequestBodyPaymentMethodEnum {
    Corporate = "corporate",
    Client = "client",
    App = "app",
    Credit = "credit",
    CorporateCard = "corporate_card"
}
export declare class LaunchProjectRequestBody extends SpeakeasyBase {
    bin?: string;
    budgetCode?: string;
    cardId?: number;
    paymentCode?: string;
    paymentMethod?: LaunchProjectRequestBodyPaymentMethodEnum;
    stripeToken?: string;
}
export declare class LaunchProjectRequest extends SpeakeasyBase {
    pathParams: LaunchProjectPathParams;
    request?: LaunchProjectRequestBody;
}
export declare class LaunchProjectResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    projectLaunchResponse?: shared.ProjectLaunchResponse;
    statusCode: number;
}
