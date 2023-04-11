import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteSetupV1ServicesCalendarIdRequest extends SpeakeasyBase {
    /**
     * id of calender to delete service links from
     */
    id: string;
}
export declare class DeleteSetupV1ServicesCalendarIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    serviceCalendarViewModel?: shared.ServiceCalendarViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
