import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSetupV1CalendarsIdServicesRequest extends SpeakeasyBase {
    /**
     * id of calendar object
     */
    id: string;
    /**
     * Page limit default 20, max 100
     */
    limit?: number;
    /**
     * Starting row of page, default 0
     */
    offset?: number;
}
export declare class GetSetupV1CalendarsIdServicesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    serviceListViewModel?: shared.ServiceListViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
