import { SpeakeasyBase } from "../../../internal/utils";
import { PageMetaData } from "./pagemetadata";
import { SentryImpactRiskObject } from "./sentryimpactriskobject";
export declare class SentryObjectPagingDto extends SpeakeasyBase {
    links?: Record<string, any>;
    page?: PageMetaData;
    sentryObjects?: SentryImpactRiskObject[];
}
