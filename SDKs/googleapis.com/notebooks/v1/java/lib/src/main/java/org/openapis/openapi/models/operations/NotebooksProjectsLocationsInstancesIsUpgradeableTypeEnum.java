/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * NotebooksProjectsLocationsInstancesIsUpgradeableTypeEnum - Optional. The optional UpgradeType. Setting this field will search for additional compute images to upgrade this instance.
 */
public enum NotebooksProjectsLocationsInstancesIsUpgradeableTypeEnum {
    UPGRADE_TYPE_UNSPECIFIED("UPGRADE_TYPE_UNSPECIFIED"),
    UPGRADE_FRAMEWORK("UPGRADE_FRAMEWORK"),
    UPGRADE_OS("UPGRADE_OS"),
    UPGRADE_CUDA("UPGRADE_CUDA"),
    UPGRADE_ALL("UPGRADE_ALL");

    @JsonValue
    public final String value;

    private NotebooksProjectsLocationsInstancesIsUpgradeableTypeEnum(String value) {
        this.value = value;
    }
}
