import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteOrganizationInsightMonitoredMediaServerRequest extends SpeakeasyBase {
    monitoredMediaServerId: string;
    organizationId: string;
}
export declare class DeleteOrganizationInsightMonitoredMediaServerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
