import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposTransferRequestBody extends SpeakeasyBase {
    /**
     * The username or organization name the repository will be transferred to.
     */
    newOwner: string;
    /**
     * ID of the team or teams to add to the repository. Teams can only be added to organization-owned repositories.
     */
    teamIds?: number[];
}
export declare class ReposTransferRequest extends SpeakeasyBase {
    requestBody: ReposTransferRequestBody;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class ReposTransferResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    minimalRepository?: shared.MinimalRepository;
}
