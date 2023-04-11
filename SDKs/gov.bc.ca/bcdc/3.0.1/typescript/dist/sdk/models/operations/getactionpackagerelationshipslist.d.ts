import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetActionPackageRelationshipsListRequest extends SpeakeasyBase {
    /**
     * The id or name of the first package
     */
    id?: string;
    /**
     * The id or name of the second package
     */
    id2?: string;
    /**
     * relationship as string
     */
    rel?: string;
}
export declare class GetActionPackageRelationshipsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
