import { SpeakeasyBase } from "../../../internal/utils";
import { Language } from "./language";
import { Meta } from "./meta";
export declare class LanguageWrapped extends SpeakeasyBase {
    callback?: string;
    meta?: Meta;
    results?: Language[];
}
