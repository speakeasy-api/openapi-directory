import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetActionPackageActivityListRequest extends SpeakeasyBase {
    /**
     * The id or name of the package
     */
    id?: string;
    /**
     * The maximum number of activities to return
     */
    limit?: number;
    /**
     * Where to start getting activity items from
     */
    offset?: number;
}
export declare class GetActionPackageActivityListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
