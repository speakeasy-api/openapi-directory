import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostSetupV1LocationsBulkResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    locationViewModels?: shared.LocationViewModel[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
