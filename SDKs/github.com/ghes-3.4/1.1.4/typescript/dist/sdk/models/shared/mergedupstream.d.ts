import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MergedUpstreamMergeTypeEnum {
    Merge = "merge",
    FastForward = "fast-forward",
    None = "none"
}
/**
 * Results of a successful merge upstream request
 */
export declare class MergedUpstream extends SpeakeasyBase {
    baseBranch?: string;
    mergeType?: MergedUpstreamMergeTypeEnum;
    message?: string;
}
