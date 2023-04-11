import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectorVersion } from "./connectorversion";
/**
 * Response message for Connectors.ListConnectorVersions.
 */
export declare class ListConnectorVersionsResponse extends SpeakeasyBase {
    /**
     * A list of connector versions.
     */
    connectorVersions?: ConnectorVersion[];
    /**
     * Next page token.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
