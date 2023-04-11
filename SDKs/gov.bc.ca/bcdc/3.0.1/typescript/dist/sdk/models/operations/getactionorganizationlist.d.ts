import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetActionOrganizationListRequest extends SpeakeasyBase {
    /**
     * The number of organizations to be returned per page
     */
    limit?: number;
    /**
     * The offset (index) of the first organizations to return
     */
    offset?: number;
}
export declare class GetActionOrganizationListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
