import { SpeakeasyBase } from "../../../internal/utils";
import { ContinuousProjectLanguageCache } from "./continuousprojectlanguagecache";
import { PagingMeta } from "./pagingmeta";
/**
 * Continuous project cache for translations per target language.
 */
export declare class ContinuousProjectCache extends SpeakeasyBase {
    meta?: PagingMeta;
    translations?: Record<string, ContinuousProjectLanguageCache>;
}
