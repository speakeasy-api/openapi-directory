import { SpeakeasyBase } from "../../../internal/utils";
import { SetResume } from "./setresume";
/**
 * Success
 */
export declare class Serie extends SpeakeasyBase {
    id: string;
    logo?: string;
    name: string;
    sets: SetResume[];
}
