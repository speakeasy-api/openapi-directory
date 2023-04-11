import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListCustomInstrumentsSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
export declare class ListCustomInstrumentsRequest extends SpeakeasyBase {
    /**
     * Show instruments with the specified ID
     */
    id?: string[];
    /**
     * Show instruments with the specified name (case-sensitive)
     */
    name?: string;
    /**
     * Page number
     */
    page?: number;
    /**
     * Number of results per page
     */
    perPage?: number;
    /**
     * Show instruments with the specified tag, such as Percussion or Strings (case-sensitive)
     */
    tag?: string;
}
export declare class ListCustomInstrumentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    instrumentsListResult?: shared.InstrumentsListResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
