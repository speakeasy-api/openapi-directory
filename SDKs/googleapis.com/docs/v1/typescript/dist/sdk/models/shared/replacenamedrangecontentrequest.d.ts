import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Replaces the contents of the specified NamedRange or NamedRanges with the given replacement content. Note that an individual NamedRange may consist of multiple discontinuous ranges. In this case, only the content in the first range will be replaced. The other ranges and their content will be deleted. In cases where replacing or deleting any ranges would result in an invalid document structure, a 400 bad request error is returned.
 */
export declare class ReplaceNamedRangeContentRequest extends SpeakeasyBase {
    /**
     * The ID of the named range whose content will be replaced. If there is no named range with the given ID a 400 bad request error is returned.
     */
    namedRangeId?: string;
    /**
     * The name of the NamedRanges whose content will be replaced. If there are multiple named ranges with the given name, then the content of each one will be replaced. If there are no named ranges with the given name, then the request will be a no-op.
     */
    namedRangeName?: string;
    /**
     * Replaces the content of the specified named range(s) with the given text.
     */
    text?: string;
}
