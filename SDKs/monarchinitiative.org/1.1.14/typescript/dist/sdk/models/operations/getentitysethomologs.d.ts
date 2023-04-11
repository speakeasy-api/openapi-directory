import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEntitySetHomologsRequest extends SpeakeasyBase {
    /**
     * Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387
     */
    subject?: string[];
}
export declare class GetEntitySetHomologsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associationResults?: shared.AssociationResults[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
