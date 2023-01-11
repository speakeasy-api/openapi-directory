package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomCoursesListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public ClassroomCoursesListSecurityOption1 option1;
    public ClassroomCoursesListSecurity withOption1(ClassroomCoursesListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public ClassroomCoursesListSecurityOption2 option2;
    public ClassroomCoursesListSecurity withOption2(ClassroomCoursesListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}