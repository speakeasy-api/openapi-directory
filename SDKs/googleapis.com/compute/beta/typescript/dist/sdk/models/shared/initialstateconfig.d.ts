import { SpeakeasyBase } from "../../../internal/utils";
import { FileContentBuffer } from "./filecontentbuffer";
/**
 * Initial State for shielded instance, these are public keys which are safe to store in public
 */
export declare class InitialStateConfig extends SpeakeasyBase {
    /**
     * The Key Database (db).
     */
    dbs?: FileContentBuffer[];
    /**
     * The forbidden key database (dbx).
     */
    dbxs?: FileContentBuffer[];
    /**
     * The Key Exchange Key (KEK).
     */
    keks?: FileContentBuffer[];
    pk?: FileContentBuffer;
}
