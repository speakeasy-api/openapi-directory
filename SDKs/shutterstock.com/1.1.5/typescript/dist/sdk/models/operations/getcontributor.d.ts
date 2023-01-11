import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetContributorPathParams extends SpeakeasyBase {
    contributorId: string;
}
export declare class GetContributorSecurity extends SpeakeasyBase {
    customerAccessCode?: shared.SchemeCustomerAccessCode;
    basic?: shared.SchemeBasic;
}
export declare class GetContributorRequest extends SpeakeasyBase {
    pathParams: GetContributorPathParams;
    security: GetContributorSecurity;
}
export declare class GetContributorResponse extends SpeakeasyBase {
    contentType: string;
    contributorProfile?: shared.ContributorProfile;
    statusCode: number;
}
