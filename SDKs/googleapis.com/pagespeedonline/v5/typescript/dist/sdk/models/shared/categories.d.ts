import { SpeakeasyBase } from "../../../internal/utils";
import { LighthouseCategoryV5 } from "./lighthousecategoryv5";
/**
 * The categories in a Lighthouse run.
 */
export declare class Categories extends SpeakeasyBase {
    /**
     * A Lighthouse category.
     */
    accessibility?: LighthouseCategoryV5;
    /**
     * A Lighthouse category.
     */
    bestPractices?: LighthouseCategoryV5;
    /**
     * A Lighthouse category.
     */
    performance?: LighthouseCategoryV5;
    /**
     * A Lighthouse category.
     */
    pwa?: LighthouseCategoryV5;
    /**
     * A Lighthouse category.
     */
    seo?: LighthouseCategoryV5;
}
