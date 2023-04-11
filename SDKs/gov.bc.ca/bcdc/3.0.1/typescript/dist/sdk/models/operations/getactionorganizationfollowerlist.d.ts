import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetActionOrganizationFollowerListRequest extends SpeakeasyBase {
    /**
     * The id or name of the organization
     */
    id?: string;
}
export declare class GetActionOrganizationFollowerListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
