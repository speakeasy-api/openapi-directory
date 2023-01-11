import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListCustomInstrumentsQueryParams extends SpeakeasyBase {
    id?: string[];
    name?: string;
    page?: number;
    perPage?: number;
    tag?: string;
}
export declare class ListCustomInstrumentsSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class ListCustomInstrumentsRequest extends SpeakeasyBase {
    queryParams: ListCustomInstrumentsQueryParams;
    security: ListCustomInstrumentsSecurity;
}
export declare class ListCustomInstrumentsResponse extends SpeakeasyBase {
    contentType: string;
    instrumentsListResult?: shared.InstrumentsListResult;
    statusCode: number;
}
