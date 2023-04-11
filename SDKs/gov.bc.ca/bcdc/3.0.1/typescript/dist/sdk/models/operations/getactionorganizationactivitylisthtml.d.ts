import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetActionOrganizationActivityListHtmlRequest extends SpeakeasyBase {
    /**
     * The id or name of the organization
     */
    id?: string;
}
export declare class GetActionOrganizationActivityListHtmlResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
