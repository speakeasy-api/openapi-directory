import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetActionOrganizationFollowerCountRequest extends SpeakeasyBase {
    /**
     * The id or name of the organization
     */
    id?: string;
}
export declare class GetActionOrganizationFollowerCountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
