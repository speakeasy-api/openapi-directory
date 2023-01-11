package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomCoursesAliasesListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public ClassroomCoursesAliasesListSecurityOption1 option1;
    public ClassroomCoursesAliasesListSecurity withOption1(ClassroomCoursesAliasesListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public ClassroomCoursesAliasesListSecurityOption2 option2;
    public ClassroomCoursesAliasesListSecurity withOption2(ClassroomCoursesAliasesListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}