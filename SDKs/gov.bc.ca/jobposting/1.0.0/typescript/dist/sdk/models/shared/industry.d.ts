import { SpeakeasyBase } from "../../../internal/utils";
import { SubIndustry } from "./subindustry";
export declare class Industry extends SpeakeasyBase {
    /**
     * The name of the Industries.
     */
    caption?: string;
    /**
     * Industry ID.
     */
    id?: number;
    subIndustries?: SubIndustry[];
}
