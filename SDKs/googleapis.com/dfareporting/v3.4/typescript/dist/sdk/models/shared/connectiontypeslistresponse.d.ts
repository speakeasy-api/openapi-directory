import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionType } from "./connectiontype";
/**
 * Connection Type List Response
 */
export declare class ConnectionTypesListResponse extends SpeakeasyBase {
    /**
     * Collection of connection types such as broadband and mobile.
     */
    connectionTypes?: ConnectionType[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#connectionTypesListResponse".
     */
    kind?: string;
}
