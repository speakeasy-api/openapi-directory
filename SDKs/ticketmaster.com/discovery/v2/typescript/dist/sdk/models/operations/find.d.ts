import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FindIncludeLicensedContentEnum {
    Yes = "yes",
    No = " no"
}
export declare enum FindIncludeSpellcheckEnum {
    Yes = "yes",
    No = " no"
}
export declare enum FindIncludeTestEnum {
    Yes = "yes",
    No = " no",
    Only = " only"
}
export declare enum FindSourceEnum {
    Ticketmaster = "ticketmaster",
    Universe = " universe",
    Frontgate = " frontgate",
    Tmr = " tmr"
}
export declare class FindQueryParams extends SpeakeasyBase {
    classificationId?: any[];
    classificationName?: any[];
    id?: string;
    includeLicensedContent?: FindIncludeLicensedContentEnum;
    includeSpellcheck?: FindIncludeSpellcheckEnum;
    includeTest?: FindIncludeTestEnum;
    keyword?: string;
    locale?: string;
    page?: string;
    size?: string;
    sort?: string;
    source?: FindSourceEnum;
}
export declare class FindRequest extends SpeakeasyBase {
    queryParams: FindQueryParams;
}
export declare class FindResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
