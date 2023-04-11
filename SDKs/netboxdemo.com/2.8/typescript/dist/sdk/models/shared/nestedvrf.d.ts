import { SpeakeasyBase } from "../../../internal/utils";
export declare class NestedVRF extends SpeakeasyBase {
    id?: number;
    name: string;
    prefixCount?: number;
    /**
     * Unique route distinguisher (as defined in RFC 4364)
     */
    rd?: string;
    url?: string;
}
