import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListCustomDescriptorsQueryParams extends SpeakeasyBase {
    bandId?: string;
    bandName?: string;
    id?: string[];
    instrumentId?: string;
    instrumentName?: string;
    name?: string;
    page?: number;
    perPage?: number;
    renderSpeedOver?: number;
    tag?: string;
    tempo?: number;
    tempoFrom?: number;
    tempoTo?: number;
}
export declare class ListCustomDescriptorsSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class ListCustomDescriptorsRequest extends SpeakeasyBase {
    queryParams: ListCustomDescriptorsQueryParams;
    security: ListCustomDescriptorsSecurity;
}
export declare class ListCustomDescriptorsResponse extends SpeakeasyBase {
    contentType: string;
    descriptorsListResult?: shared.DescriptorsListResult;
    statusCode: number;
}
