import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ArticleGeoFacet2Enum {
    Unknown = ""
}
export declare enum ArticleGeoFacet1Enum {
    Unknown = ""
}
export declare class Article extends SpeakeasyBase {
    abstract?: string;
    byline?: string;
    column?: string;
    desFacet?: any;
    geoFacet?: any;
    media?: any;
    orgFacet?: any[];
    perFacet?: any[];
    publishedDate?: string;
    section?: string;
    source?: string;
    title?: string;
    url?: string;
}
