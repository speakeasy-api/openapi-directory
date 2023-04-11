import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines the level of access that workflows outside of the repository have to actions and reusable workflows within the
 *
 * @remarks
 * repository.
 *
 * `none` means the access is only possible from workflows in this repository. `organization` level access allows sharing across the organization. `enterprise` level access allows sharing across the enterprise.
 */
export declare enum ActionsWorkflowAccessToRepositoryAccessLevelEnum {
    None = "none",
    Organization = "organization",
    Enterprise = "enterprise"
}
/**
 * Response
 */
export declare class ActionsWorkflowAccessToRepository extends SpeakeasyBase {
    /**
     * Defines the level of access that workflows outside of the repository have to actions and reusable workflows within the
     *
     * @remarks
     * repository.
     *
     * `none` means the access is only possible from workflows in this repository. `organization` level access allows sharing across the organization. `enterprise` level access allows sharing across the enterprise.
     */
    accessLevel: ActionsWorkflowAccessToRepositoryAccessLevelEnum;
}
