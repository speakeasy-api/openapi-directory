import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DrillersNamesListRequest extends SpeakeasyBase {
    /**
     * A search term.
     */
    search?: string;
}
export declare class DrillersNamesListResponse extends SpeakeasyBase {
    contentType: string;
    personNames?: shared.PersonName[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
