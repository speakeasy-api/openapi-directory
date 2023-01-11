package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomCoursesTopicsGetSecurity {
    @SpeakeasyMetadata("security:option=true")
    public ClassroomCoursesTopicsGetSecurityOption1 option1;
    public ClassroomCoursesTopicsGetSecurity withOption1(ClassroomCoursesTopicsGetSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public ClassroomCoursesTopicsGetSecurityOption2 option2;
    public ClassroomCoursesTopicsGetSecurity withOption2(ClassroomCoursesTopicsGetSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}