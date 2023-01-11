package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomCoursesAnnouncementsListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public ClassroomCoursesAnnouncementsListSecurityOption1 option1;
    public ClassroomCoursesAnnouncementsListSecurity withOption1(ClassroomCoursesAnnouncementsListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public ClassroomCoursesAnnouncementsListSecurityOption2 option2;
    public ClassroomCoursesAnnouncementsListSecurity withOption2(ClassroomCoursesAnnouncementsListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}