import { SpeakeasyBase } from "../../../internal/utils";
import { FineTune } from "./finetune";
/**
 * OK
 */
export declare class ListFineTunesResponse extends SpeakeasyBase {
    data: FineTune[];
    object: string;
}
