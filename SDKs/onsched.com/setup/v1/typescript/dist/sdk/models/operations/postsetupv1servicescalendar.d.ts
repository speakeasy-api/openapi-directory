import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostSetupV1ServicesCalendarResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    serviceCalendarViewModel?: shared.ServiceCalendarViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
