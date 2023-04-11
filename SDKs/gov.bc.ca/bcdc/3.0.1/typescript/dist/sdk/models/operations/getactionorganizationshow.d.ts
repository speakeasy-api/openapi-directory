import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetActionOrganizationShowRequest extends SpeakeasyBase {
    /**
     * The id or name of the organization
     */
    id?: string;
    /**
     * include a list of the organization's datasets
     */
    includeDatasets?: boolean;
}
export declare class GetActionOrganizationShowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
