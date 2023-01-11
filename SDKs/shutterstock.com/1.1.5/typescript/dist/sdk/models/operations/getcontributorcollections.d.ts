import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetContributorCollectionsPathParams extends SpeakeasyBase {
    contributorId: string;
    id: string;
}
export declare class GetContributorCollectionsSecurity extends SpeakeasyBase {
    customerAccessCode?: shared.SchemeCustomerAccessCode;
    basic?: shared.SchemeBasic;
}
export declare class GetContributorCollectionsRequest extends SpeakeasyBase {
    pathParams: GetContributorCollectionsPathParams;
    security: GetContributorCollectionsSecurity;
}
export declare class GetContributorCollectionsResponse extends SpeakeasyBase {
    collection?: shared.Collection;
    contentType: string;
    statusCode: number;
}
