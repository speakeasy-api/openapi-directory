import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetActionOrganizationRevisionListRequest extends SpeakeasyBase {
    /**
     * The name or id of the organization
     */
    id?: string;
}
export declare class GetActionOrganizationRevisionListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
