/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class FirestoreProjectsDatabasesExportDocumentsSecurity {
    @SpeakeasyMetadata("security:option=true")
    public FirestoreProjectsDatabasesExportDocumentsSecurityOption1 option1;

    public FirestoreProjectsDatabasesExportDocumentsSecurity withOption1(FirestoreProjectsDatabasesExportDocumentsSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    
    @SpeakeasyMetadata("security:option=true")
    public FirestoreProjectsDatabasesExportDocumentsSecurityOption2 option2;

    public FirestoreProjectsDatabasesExportDocumentsSecurity withOption2(FirestoreProjectsDatabasesExportDocumentsSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
    
    public FirestoreProjectsDatabasesExportDocumentsSecurity(){}
}
