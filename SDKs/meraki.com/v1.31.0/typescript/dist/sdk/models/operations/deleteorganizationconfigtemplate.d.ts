import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteOrganizationConfigTemplateRequest extends SpeakeasyBase {
    configTemplateId: string;
    organizationId: string;
}
export declare class DeleteOrganizationConfigTemplateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
