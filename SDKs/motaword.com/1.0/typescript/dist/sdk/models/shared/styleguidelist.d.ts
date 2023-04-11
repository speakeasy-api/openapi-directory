import { SpeakeasyBase } from "../../../internal/utils";
import { PagingMeta } from "./pagingmeta";
import { StyleGuide } from "./styleguide";
/**
 * A list of style guide models
 */
export declare class StyleGuideList extends SpeakeasyBase {
    meta?: PagingMeta;
    styleguides?: StyleGuide[];
}
