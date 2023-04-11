import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetActionPackageListRequest extends SpeakeasyBase {
    /**
     * The number of packages to be returned per page
     */
    limit?: number;
    /**
     * The offset (index) of the first package to return
     */
    offset?: number;
}
export declare class GetActionPackageListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
