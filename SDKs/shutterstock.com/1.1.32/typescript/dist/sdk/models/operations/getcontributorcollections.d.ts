import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetContributorCollectionsSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
export declare class GetContributorCollectionsRequest extends SpeakeasyBase {
    /**
     * Contributor ID
     */
    contributorId: string;
    /**
     * Collection ID that belongs to the contributor
     */
    id: string;
}
export declare class GetContributorCollectionsResponse extends SpeakeasyBase {
    /**
     * OK
     */
    collection?: shared.Collection;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
