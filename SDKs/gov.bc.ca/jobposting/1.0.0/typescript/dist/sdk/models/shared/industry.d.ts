import { SpeakeasyBase } from "../../../internal/utils";
import { SubIndustry } from "./subindustry";
export declare class Industry extends SpeakeasyBase {
    caption?: string;
    id?: number;
    subIndustries?: SubIndustry[];
}
